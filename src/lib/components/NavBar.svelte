<!-- NavBar.svelte -->
<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import '$lib/styles/nev-bar.css';

	// Determine active tab based on current path
	$: activeTab = $page.url.pathname === '/' ? 'about' : 'contact';
</script>

<nav class="navbar-container">
	<div class="nav-links">
		<div
			class="nav-indicator"
			style="left: {activeTab === 'about' ? '50%' : '50%'};
             transform: translateX(-50%) translateX({activeTab === 'about' ? '-8rem' : '8rem'})">
		</div>

		<a
			href="{base}/"
			class="nav-link"
			class:active={activeTab === 'about'}>
			About
		</a>

		<a
			href="{base}/contact"
			class="nav-link"
			class:active={activeTab === 'contact'}>
			Contact
		</a>
	</div>
</nav>