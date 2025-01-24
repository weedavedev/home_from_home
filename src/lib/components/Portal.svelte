<script>
  import { onMount, onDestroy } from 'svelte';

  let portalRoot;

  onMount(() => {
    portalRoot = document.createElement('div');
    portalRoot.id = 'portal-root';
    portalRoot.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 99999;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    document.body.appendChild(portalRoot);
  });

  onDestroy(() => {
    portalRoot?.remove();
  });
</script>

{#if portalRoot}
  <div bind:this={portalRoot}>
    <slot />
  </div>
{/if}