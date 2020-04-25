
function UserPost(_post_data){
	this.user_Id 	=_post_data.userId;
	this.user_name 	=_post_data.username;
	this.user_designation=_post_data.designation;
	this.user_post_type=_post_data.typeofpost;
	this.user_image =_post_data.userprofile;
	this.user_details=_post_data.details;
	this.user_time=_post_data.time;
	this.user_content=_post_data.content;
	this.user_post_image =_post_data.image;
}

UserPost.prototype.getUserId = function(){
	return this.user_Id;
};

UserPost.prototype.getUserPostImage = function(){
	return this.user_post_image;
};
