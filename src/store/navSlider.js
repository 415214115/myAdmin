import { editRouter} from '../router/index.js'
let routerList = []
function getRouter(){
	editRouter.forEach((v, i) => {
		if(v.name == 'layout'){
			routerList = routerList.concat(v.children)
		}
	})
}
getRouter()
export default routerList