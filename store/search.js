/**
 * imports
 */

         import Vuex from 'vuex'

         import {
             makeRequest
         } from '~/globals'

         import {
             api
         } from '~/globals/API/endpoints'


/**
 * action types definitions
 */

        const types = {
            SET_SEARCH_STRING: 'SET_SEARCH_STRING'
        }


/**
 * define user state
 */

        const search = {
            /**
             * stored state
             * @type {Object}
             */
            state: {
                searchString: '',
                searchResults: {}
            },

            /**
             * actions
             */
            actions: {

                /**
                 * fetching search results through api
                 * @param  {[type]} context [description]
                 * @param  {[type]} string  [description]
                 * @return {[type]}         [description]
                 */
                createSearchFromString(context, { string } ) {

                    // making request to API
                    makeRequest('GET', api + 'search?string=' + string).then( (results) => {

                        // storing the results
                        const searchData = results.data
                        console.log(searchData)

                        // committing action
                        context.commit(types.SET_SEARCH_STRING, {
                            ...searchData
                        })

                        // extending promise
                        return Promise.resolve()

                    }).catch( (error) => {
                        throw new Error(error)
                    })
                }


            },

            /**
             * action mutators
             * @type {Object}
             */
            mutations: {
                [types.SET_SEARCH_STRING](state, results) {
                    state.searchResults = results
                }
            },

            // allow store namespaces
            namespaced: true

        }

export default search
