import { computed, ref } from 'vue';

const STATE_DEFAULT_VALUE = {
  id: null,
  name: '',
  open: false,
  data: {},
  header: {
    title: '',
    subtitle: '',
    icon: '',
  },
  style: {
    width: '76rem',
    height: '25rem',
  },
};

export default function useModal(initialState = STATE_DEFAULT_VALUE) {
  const state = ref(initialState);
  const isOpen = computed(() => state.value.open);

  function open(obj) {
    setState({
      open: true,
      ...obj,
    });
  }

  function close(obj) {
    setState({
      open: false,
      id: null,
      ...obj,
    });
  }

  function setState(obj) {
    state.value = {
      ...state.value,
      ...obj,
    };
  }

  return { state, isOpen, open, close, setState };
}
