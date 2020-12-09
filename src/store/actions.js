const actions = {
  fetch_graphData({ state }) {
    return new Promise((resolve, reject) => {
      state.axios
        .get("/live_server/graph_data.json")
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default actions;
