# TODO list:

* almost all the components are un-styled
* there is no navigation component
* missing `back` button for `UsersDetailPage` component:
  * proposed solution for `back` functionality: use react context API or local/session storage to store reference to clicked `go details page` button(for local storage we could save id and use `js` to getElementById). When `UsersTable` is mounted then use stored reference to scroll page to latest clicked button position. See: (mdn scrollIntoView)(https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView). Scroll logic could be extracted into custom hook.
* missing functional tests for most of the components.
* no e2e tests at all.