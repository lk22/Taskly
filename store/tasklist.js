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
                tasklists: {}
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
                    // make post request to api here
                }
            }
        }
