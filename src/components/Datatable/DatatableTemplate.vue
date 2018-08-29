<template>
	<div>
		<vue-good-table :columns="columns" :rows="rows">
			<template slot="table-row" slot-scope="props">
			    <span v-if="props.column.field == 'image'">
			      <img v-bind:src=" props.row.image" width="150px"/> 
			    </span>
			    <span v-else>
			      {{props.formattedRow[props.column.field]}}
			    </span>
		  	</template>
	  	</vue-good-table>
	</div>
</template>
<script src="./DatatableComponent.js"></script>