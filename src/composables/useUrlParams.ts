import { useRoute, useRouter } from 'vue-router';

export default function useUrlParams() {
  const route = useRoute();
  const router = useRouter();

  function hasSearchParam(param) {
    return Object.prototype.hasOwnProperty.call(route.query, param);
  }

  function getSearchParam(param) {
    return route.query[param] ?? null;
  }

  async function setSearchParam(key, value) {
    if (!key) return;
    await updateSearchParams({ [key]: value });
  }

  async function deleteSearchParam(key) {
    if (!key || !hasSearchParam(key)) return;
    await updateSearchParams({ [key]: null });
  }

  async function deleteAllSearchParams() {
    await router.push({ query: {} });
  }

  async function updateSearchParams(params = {}) {
    const updatedQuery = { ...route.query, ...params };

    // Remove chaves com valores nulos ou indefinidos
    Object.keys(updatedQuery).forEach((key) => {
      if (updatedQuery[key] == null) {
        delete updatedQuery[key];
      }
    });

    await router.push({ query: updatedQuery });
  }

  async function clearAllRouteParams() {
    await deleteAllSearchParams();
  }

  return {
    hasSearchParam,
    getSearchParam,
    setSearchParam,
    deleteSearchParam,
    deleteAllSearchParams,
    updateSearchParams,
    clearAllRouteParams,
  };
}
