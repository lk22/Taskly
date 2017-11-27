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
            ADD_NEW_TASK: 'ADD_NEW_TASK',
            UPDATE_TASK: 'UPDATE_TASK',
            REMOVE_TASK: 'REMOVE_TASK',
            SET_PRIORITY: 'SET_PRIORITY',
            CHECKOUT_TASK: 'CHECKOUT_TASK',
            CHECKOUT_ALL_TASKS: 'CHECKOUT_ALL_TASKS'
        }


/**
 * task store
 */


        const task = {
            /**
             * State object
             */
            state: {
                items: []
            },

            /**
             * getter methods
             */
            getters: {
                getTasks: state => {
                    return state.items
                },

                getTask: state => (id) => {
                    return state.items.filter(task => task.id === id)
                }
            },
        }
