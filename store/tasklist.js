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
 * types
 */


        const types = {
            ADD_TASK_LIST: 'ADD_TASK_LIST',
            UPDATE_TASK_LIST: 'UPDATE_TASK_LIST',
            REMOVE_TASK_LIST: 'REMOVE_TASK_LIST',
        }


/**
 * state
 */


        const tasklist = {
            /**
             * define state for tasklists
             * @type {Object}
             */
            state: {
                items: []
                tasklist: {

                }
            },

            /**
             * define custom getters for fetching tasklists
             * @type {Object}
             */
            getters: {
                getTasklists: state => {
                    return state.tasklists
                }
            },

            /**
             * define actions bound to tasklists store
             */
            actions: {
                /**
                 * create new tasklist action
                 */
                create(context, {
                    name
                }) {
                    try {

                        makeRequest('POST', api.tasklists.createTasklist, {name}).then((response) => {
                            console.log(response);

                            const name = name;
                            context.commit(types.ADD_TASK_LIST, {
                                name
                            });

                            // extending request
                            return Promise.resolve();

                        })

                    } catch(error) {
                        // throw error
                    }

                },

                /**
                 * Update existing tasklist
                 * @param  {[type]} context [description]
                 * @param  {[type]} name    [description]
                 * @return {[type]}         [description]
                 */
                update(context, {
                    name
                }) {

                    try {

                        makeRequest('POST', api + 'tasklists/' + state.tasklists.slug + 'update-tasklist').then( (response) => {
                            console.log(response);

                            const name = name
                            context.commit(types.UPDATE_TASK_LIST, {
                                name
                            })

                            // extending request
                            return Promist.resolve();
                        })

                    } catch ( error ) {
                        // throw error here
                    }
                },

                /**
                 * Delete existing tasklist
                 * @param  {[type]} context [description]
                 * @param  {[type]} id      [description]
                 * @return {[type]}         [description]
                 */
                delete(context, {
                    id
                }) {

                    try {

                        makeRequest('POST', api + 'tasklists/' + id + '/delete-tasklist').then( (response) => {
                            console.log(response);

                            context.commit(types.REMOVE_TASK_LIST);

                            return Promise.resolve();
                        })

                    } catch ( error ) {
                        throw new Error('Could not delete your tasklist')
                    }

                }
            },

            /**
             * Mutations
             */
            mutations: {

                /**
                 * add task list mutation
                 */
                [types.ADD_TASK_LIST](state, tasklist) {
                    state.items = [tasklist].concat(state.items)
                },

                /**
                 * update task list mutation
                 */
                [types.UPDATE_TASK_LIST](state, tasklist) {
                    const {name} = tasklist

                    if(name) {
                        tasklist.name = name
                    }
                },

                /**
                 * removing tasklist mutation
                 */
                [types.REMOVE_TASK_LIST](state, tasklist) {
                    state.items = state.items.filter(item => item.id !== todo.id)
                },
                namespaced: true
            }
        }
