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

            actions: {

                /**
                 * creating a new task
                 */
                create(context, {name, priority}) {

                    // make API request
                    try {

                        makeRequest('POST', api + 'tasks/create-task', {
                            name,
                            priority
                        }).then( (response) => {
                            console.log(response);

                            const name = name;
                            const priority = priority;

                            context.commit(types.ADD_NEW_TASK, {
                                name,
                                priority
                            })

                            return Promise.resolve();
                        })

                    } catch ( error ) {
                        // throw error here
                    }
                },


                /**
                 * updating existing task
                 */
                update(context, {name, priority, id}) {

                    // make API request
                    try {

                        makeRequest('POST', api + 'tasks/' + id + '/update-task', {
                            name,
                            priority
                        }).then((response) => {
                            console.log(response);

                            const name = name;
                            const priority = priority;

                            context.commit(types.UPDATE_TASK, {
                                name,
                                priority
                            })

                            return Promise.resolve();
                        })
                    } catch (error) {

                    }
                },

                /**
                 * remove existing task
                 */
                delete(context, {id}) {

                    const id = id;

                    try {

                        makeRequest('POST', api + 'tasks/' + id + '/delete-task', {}).then((response) => {
                            console.log(response);

                            context.commit(types.REMOVE_TASK);

                            return Promise.resolve();
                        })

                    } catch (error) {}

                },

                /**
                 * @todo
                 * 1: add setPriority action Here
                 * 2: checkoutTask action
                 * 3: checkAllTasks action
                 */
            },

            mutations: {

            },
            namespaced: true;
        }
