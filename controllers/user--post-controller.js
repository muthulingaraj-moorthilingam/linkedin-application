class ControllerPost{
	constructor(model,view){
		this.model=model;
		this.view=view;
	}

	renderPost(){
		this.view.renderView(this.model);
	}
	
}