/**
 * API Main endpoint
 * @type {String}
 */
export const api = 'http://taskly.dev/api/v1/'

export const oauth = {
	clients: 'http://taskly.dev/oauth/clients'
}

/**
 * API Endpoints
 * @type {Object}
 */
export const endpoints = {
	user: {
		all: 				api + 'users',
		singleUser: 		api + 'user/:slug',
		userTasklists: 		api + 'user/:slug/tasklists',
		userTasklistsTasks:	api + 'user/:slug/tasklists/tasks'
 	},

 	tasklists: {
 		all: 				api + 'tasklists',
 		tasklistsTasks:	 	api + 'tasklists/tasks',
 		singleTasklist: 	api + 'tasklists/:list_slug',
		createTasklist:     api + 'tasklists/create-tasklist',
		updateTasklist:  	api + 'tasklists/:list_slug/update_tasklist',
		deleteTasklist:     api + 'tasklists/:id/delete-tasklist'
	},

 	tasks: {
 		all: 				api + 'tasks',
 		singleTask: 		api + 'tasks/:slug'
 	},

 	placements: {
 		all: 				api + 'placements',
 		singlePlacement: 	api + 'placements/:slug'
 	}
}
