import { routes, classifyRouter} from '../router/index.js'

let routerList = []

function getRouter(){
	routes.forEach((v, i) => {
		if(v.name == 'layout'){
			routerList = routerList.concat(v.children)
		}
	})
}
getRouter()



// routerList = routerList.concat(router.options.routes)

routerList = routerList.concat(classifyRouter)

export default routerList