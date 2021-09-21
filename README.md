# Appwrite + Svelte Kit | Proof of concept

Project to test possibilities and limitations of Svelte Kit. This README explains how I used this project to see a working proof of concept of Appwrite using modern framework to build it's web console.

### Dependencies

We try to have as little dependencies as possible. Currently, project only uses depenrencies created by `svelte-kit`. No non-dev dependencies yet, except AppwriteSDK 🤩

### Fetching data from JSON files

Fetching looks to not be problem at all. There are multiple ways of doing this, you can find it in `src/routes/index.svelte`.

1. Static file import (typescript `import` keyword)
2. Fetch static file (javascript `fetch()` from `static/` folder)
3. SvelteKit endpoint (javascript server-side code. Runs once at build process and generates file. Something like serverless function that runs once and is cached until next build)

### CSS styles

Svelte Kit introduces no features, but also no limits. It understands CSS pre-compilers and it supports per-component styling. Nothing special, pretty common for all frameworks.

### State management

Svelte has one of the most simple state managements.. Anything you want to be "state", you wrap into `writable`:

```js
const users = writable([
	{
		id: 1,
		name: 'Matej'
	},
	{
		id: 2,
		name: 'Sara'
	},
	{
		id: 3,
		name: 'Christy'
	}
]);
```

If you want to read, you simply stick `$` in front, or you use `.subscribe`:

```js
const usersSnapshop = $users;

const usersSubsription = users.subscribe((newUsers) => {
	console.log('Users changed', newUsers);
});
```

You can use `$` syntax in HTML too, saves a lot of boilerplate.

### Routing

1. You can use both folder or file structure to represent route structure. For example:

- `index.svelte` = `/`

- `functions.svelte` = `/functions`
- `functions/index.svelte` = `/functions`

- `functions/logs.svelte` = `/functions/logs`
- `functions/logs/index.svelte` = `/functions/logs`

2. You can use `__layout.svelte` to show some part of the code on multiple routes, for example header or footer. You are also able to have different header on un-authentificated and authentificated pages.

3. Dynamic URLs are pretty simple, once again, represented in folder structire. You can easily access the information using `page` store provied by Svelte. Example in `src/routes/functions/f-[functionId].svelte`.

4. Svelte does not supports route guards by default, but we can implement ourselves pretty easily, as explained here: https://svelte.dev/repl/5673ff403af14411b0cd1785be3d996f?version=3.42.6

5. Same for active menu item, Svelte doesn't seem to have official way of doing this. We can implement it on our own by watching Svelte's `page` state and checking if current route matches menu item. Example ins `src/routes/__layout.svelte`.

### TODO: Fetching data from HTTP API server

### TODO: Actual form to communicate with Appwrite SDK

### TODO: Tests

---

Svelte-kit generated stuff below.

---

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
