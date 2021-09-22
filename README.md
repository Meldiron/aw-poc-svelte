# Appwrite + Svelte Kit | Proof of concept

Project to test possibilities and limitations of Svelte Kit. This README explains how I used this project to see a working proof of concept of Appwrite using modern framework to build it's web console.

### Dependencies

We try to have as little dependencies as possible. Currently, project only uses depenrencies created by `svelte-kit`. No non-dev dependencies yet, except AppwriteSDK 🤩

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

### Fetching data from JSON files

Fetching looks to not be problem at all. There are multiple ways of doing this, you can find it in `src/routes/index.svelte`.

1. Static file import (typescript `import` keyword)
2. Fetch static file (javascript `fetch()` from `static/` folder)
3. SvelteKit endpoint (javascript server-side code. Runs once at build process and generates file. Something like serverless function that runs once and is cached until next build)

### Fetching data from HTTP API server

Just like our web SDK does, we will use `fetch()`. I fetched list of Appwrite functions in `src/routes/functions/index.svelte`. API key is missing, so it probably does not work for you. Connect to your Appwrite instance to see results (or ask me for the API key).

### Form talking to Appwrite

Svelte does not support form validations, but there are plugins such as https://github.com/chainlist/svelte-forms or https://github.com/tjinauyeung/svelte-forms-lib.

We could also use more general solution, such as https://github.com/jquense/yup

### Tests

Svelte does not seem to have test support built-in, but I have seen articles about using jest for testing. For example: https://timdeschryver.dev/blog/how-to-test-svelte-components

If talking about tests in general, I also found two really interesting tools:

- E2E (end to end) tests: https://www.cypress.io/
- VRT (visual reference tests) tests: https://github.com/garris/BackstopJS

_CyPress has free plan for OOS, more at https://docs.cypress.io/guides/dashboard/organizations#Features_

You never heard of E2E testing? It is supposed to replace unit tests in a smarter way. It goes over the website, clicks everything, tries every resolution.. If it sees unexpected behaviour, it tells you. **This tests can usually find JS mistakes when you affect all button components when you only wanted to add one new option.**

You never heard about VRT? Yeah, same.. It takes screenshots of development&production and compare it. Did you remove padding? Added margin? Changed different part of website because you didn't know which part of CSS you should edit? Yeah, VRT will tell you. **This test can usually find all CSS mistakes when afecting different part of application than you expected.**

### Possible problems

- Not sure how to separate development and production configuration
- If the response of `fetch` is not typed, we end up with errors like `Property 'name' does not exist on type 'unknown'` in HTML code

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
