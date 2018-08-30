<template>
	<div>
		<vue-good-table 
			:columns="columns" 
			:rows="rows" 
			:pagination-options="{
				enabled: true,
				perPageDropdown: [10,20],
    			dropdownAllowAll: false,
			}"
			mode="remote"
			@on-page-change="onPageChange"
			@on-sort-change="onSortChange"
			@on-column-filter="onColumnFilter"
			@on-per-page-change="onPerPageChange"
			:totalRows="total">
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