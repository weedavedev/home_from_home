<!-- src/lib/components/PdfDownloader.svelte -->
<script lang="ts">
	export let pdfPath: string;
	export let fileName: string = 'document.pdf';

	function handleDownload() {
		const link = document.createElement('a');
		link.href = pdfPath;
		link.download = fileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
</script>


<a href={pdfPath}
on:click|preventDefault={handleDownload}
>
<slot>Download PDF</slot>
</a>