export default function reconsitution(route){
	route.forEach((page, i) => {
		if(page.name == 'layout'){
			page.children.forEach((child, i)=>{
				child.path = `${page.path}${child.path}`
				if(child.children){
					child.children.forEach((childjunior, i)=>{
						childjunior.path = `${child.path}/${childjunior.path}`
						if(childjunior.children){
							childjunior.children.forEach((v, i)=>{
								v.path = `${childjunior.path}/${v.path}`
							})
						}
					})
				}
			})
		}
	})
	return route
}