<script>
  /** @type {import('./$types').PageData} */
  export let data;

  console.table(data);
</script>

<ul>
  <li>
    slug: {data.slug}
  </li>
  <li>
    pathname: {data.pathname}
  </li>
  <li>
    route_id: {data.route_id}
  </li>
</ul>