import axios from 'axios';

export default {
  name: 'DatatableComponent',
  data(){
    return {
    	columns:[
    		{label:'Image',field:'image'},
    		{label:'Name',field:'name'},
    		{label:'Description',field:'description'}
    	],
    	rows:[],
      total:0,
      limit:10,
      offset:0,
      pageDropdown:"[10,20]",
    }
  },  
  methods: {
  	getChars(){
      console.log(this.offset)
  	   let data = {
        'apikey':'6b46e44334a56db24631af8033d776be',
        'ts':'1',
        'hash':'d916d187a1c11858352d75c90ca19823',
        'limit':this.limit,
        'offset':this.offset
      };
      axios
      .get('https://gateway.marvel.com/v1/public/characters', {
       params: data
      })
      .then(response => {
      	let data = response.data.data;
        this.total = data.total/data.count;;
        for (let hero of data.results) {
        	let row = {
        		image:hero.thumbnail.path+'.'+hero.thumbnail.extension,
        		name:hero.name,
        		description:hero.description
        	};
          this.rows.push(row)
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  	},
    onPageChange(params) {
      console.log(params)
      if(params.currentPage > params.prevPage){
        this.offset += this.limit;
      }
      else{
        if(this.offset > 0){
          this.offset -= this.limit;
        }
      }
      this.rows = [];
      this.getChars();
      //this.updateParams({page: params.currentPage});
      //this.loadItems();
    },

    onPerPageChange(params) {
      this.limit = params.currentPerPage
      this.rows = [];
      this.getChars();
      //this.updateParams({perPage: params.currentPerPage});
      //this.loadItems();
    },

    onSortChange(params) {
      console.log(params)
      /*this.updateParams({
        sort: {
          type: params.sortType,
          field: this.columns[params.columnIndex].field,
        },
      });*/
    },
    
    onColumnFilter(params) {
      console.log(params)
    }
  },
  mounted(){
  	this.getChars();
  }
}