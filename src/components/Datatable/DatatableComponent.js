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
    	rows:[]
    }
  },  
  methods: {
  	getChars(){
  	   let data = {
        'apikey':'6b46e44334a56db24631af8033d776be',
        'ts':'1',
        'hash':'d916d187a1c11858352d75c90ca19823'
      };
      axios
      .get('https://gateway.marvel.com/v1/public/characters', {
       params: data
      })
      .then(response => {
      	let data = response.data.data;
        data.total
        data.count
        for (let hero of data.results) {
        	let row = {
        		image:hero.thumbnail.path+'.'+hero.thumbnail.extension,
        		name:hero.name,
        		description:hero.description
        	};
        	console.log(row.image)
            this.rows.push(row)
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  	}
  },
  mounted(){
  	this.getChars();
  }
}