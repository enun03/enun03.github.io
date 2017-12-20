window.onload = function(){
	App.setCatDropDown();
	QuickLink.getLinks('All');
}

var App = {
	setCatDropDown: function(){
		var links = QuickLink.links;
		var categs = [];
		var oArea = document.querySelector('#filter-output');
		var output = '\
			<div id="ddCateg" class="dropdown float-right">\
			  <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">\
			    Categories\
			    <span class="caret"></span>\
			  </button>\
			  <ul id="categs" class="dropdown-menu" aria-labelledby="dropdownMenu1">\
			  	<li><a href="#">All</a></li>\
		';

		//Removing duplicate categories for dropdown options..
		for (var i = 0, len = links.length; i < len; i++){
			if(categs.indexOf(links[i].Category) > -1){
				console.log('Duplicate found');
			}
			else{
				categs.push(links[i].Category);
			}
		}

		//Looping through categs
		for(var item in categs){
			var categ = categs[item];	
			
			output += "\
				<li><a href='#'>"+categ+"</a></li>\
			";
		}

		output += '</ul>\
			</div>\
		';
		
		//console.log(output);
		oArea.innerHTML = output;

		//Category dropdown Event Listener
		document.querySelector('#categs').addEventListener('click', function(ev){
			ev.preventDefault();
			QuickLink.filterByCategory(ev.target.innerText);
		});
	}
}

var QuickLink = {
	'links' : [
		{'title': 'Google', 'Category': 'Search Engine', 'URL': 'http://google.com'},
		{'title': 'GitHub', 'Category': 'Development', 'URL': 'http://github.com'},
		{'title': 'w3schools', 'Category': 'Development', 'URL': 'http://w3schools.com'},
		{'title': 'Cloud9', 'Category': 'Development', 'URL': 'http://c9.io'},
		{'title': 'YouTube', 'Category': 'Media', 'URL': 'http://youtube.com'},
		{'title': 'Gmail', 'Category': 'Email', 'URL': 'http://gmail.com'},
		{'title': 'Adonis.JS Docs', 'Category': 'Documentation', 'URL': 'https://adonisjs.com/docs'},
		{'title': 'SoundCloud', 'Category': 'Media', 'URL': 'https://soundcloud.com'},
		{'title': 'DropBox', 'Category': 'Cloud Storage', 'URL': 'https://dropbox.com'}		
	],
	getLinks : function(filter){
		var links = QuickLink.links;
		var oArea = document.querySelector('#output');
		var output = '<ul class="list-group list-links">';

		if (filter == 'All'){
			for(var link_obj in links){
				var link_obj_item = links[link_obj];
				var link_title = link_obj_item.title;
				var link_URL = link_obj_item.URL;
				var link_Category = link_obj_item.Category;

				output += "\
					<li class='list-group-item'><a href='"+link_URL+"' target='_blank'><center>"+link_title+"</center></a></li>\
				";
			}

			output += '</ul>';
			oArea.innerHTML = output;
		}
		else{
			for(var link_obj in filter){
				//Loging links obj current items
				var link_obj_item = filter[link_obj];
				var link_title = link_obj_item.title;
				var link_URL = link_obj_item.URL;
				var link_Category = link_obj_item.Category;

				output += "\
					<li class='list-group-item'><a href='"+link_URL+"' target='_blank'><center>"+link_title+"</center></a></li>\
				";
			}

			output += '</ul>';
			oArea.innerHTML = output;
		}
	},
	filterByCategory: function(category){
		console.log(category)

		if(category == 'All'){
			QuickLink.getLinks('All');
		}
		else{
			var _filter = QuickLink.links.filter(function(el){
				return el.Category == category;
			});
			
			console.log(_filter);

			QuickLink.getLinks(_filter);
		}		
	}
}