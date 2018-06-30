export default {
  namespace: 'global',
  state: { islogin: false },
  reducers: {
    login(state) {
      return {
        ...state, islogin: true,
      };
    },
  },
};
