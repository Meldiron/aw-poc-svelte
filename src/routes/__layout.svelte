<script lang="ts">
	import { page } from '$app/stores';
	import { VisitState } from '../store';

	const menuItems = [
		{
			path: '/',
			name: 'Home',
			isExact: true
		},
		{
			path: '/functions',
			name: 'Functions',
			isExact: false
		},
		{
			path: '/tasks',
			name: 'Tasks',
			isExact: false
		},
		{
			path: '/settings',
			name: 'Settings',
			isExact: false
		},
		{
			path: '/calc',
			name: 'Calculator',
			isExact: false
		}
	];

	function onRedirect(path: string) {
		return () => {
			VisitState.addVisit(path);
		};
	}
</script>

<header>
	{#each menuItems as menuItem}
		<a
			on:click={onRedirect($page.path)}
			class:selected={menuItem.isExact
				? $page.path === menuItem.path
				: $page.path.startsWith(menuItem.path)}
			href={menuItem.path}>{menuItem.name}</a
		>
	{/each}
</header>

<slot />

<style>
	.selected {
		font-size: 32px;
	}

	a {
		margin: 0 20px;
	}
</style>
