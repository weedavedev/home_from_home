<!-- src/lib/components/about/Tariff.svelte -->
<script>
	import '$lib/styles/table.css';
</script>

<div class="text-content">
	<h2>Tariff</h2>
	<div class="overflow-x-auto">
		<table>
			<thead>
			<tr>
				<th>Service</th>
				<th>Single dog</th>
				<th>Multiple dogs from same household</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td>1 hour dog walk</td>
				<td>£14 per dog</td>
				<td>£12.50</td>
			</tr>
			<tr>
				<td>Extended Walk</td>
				<td>£30 per day</td>
				<td>POA</td>
			</tr>
			<tr>
				<td>Home Boarding</td>
				<td>£35 per 24 Hours</td>
				<td>£25 per 24 hours for 2nd dog</td>
			</tr>
			</tbody>
		</table>
	</div>
</div>
