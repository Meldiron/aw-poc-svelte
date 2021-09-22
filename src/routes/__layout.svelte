<script lang="ts">
	import { page } from '$app/stores';

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
</script>

<header>
	{#each menuItems as menuItem}
		<a
			class:selected={menuItem.isExact
				? $page.path === menuItem.path
				: $page.path.startsWith(menuItem.path)}
			style="margin: 0 20px;"
			href={menuItem.path}>{menuItem.name}</a
		>
	{/each}
</header>

<slot />

<style>
	.selected {
		font-size: 32px;
	}
</style>
