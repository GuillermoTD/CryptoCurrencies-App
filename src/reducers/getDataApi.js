
export const initialState = {
  stats: [],
  coins: [],
};

export const localStorageState = {
  localStats:JSON.parse(localStorage.getItem("stats")),
  localCoins:JSON.parse(localStorage.getItem("coins"))
}
const getDataApi = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      console.log("llegaron los datos")
      const stats = action.data.stats
      const coins = action.data.coins
      console.log(stats)
      console.log(coins)
      localStorage.setItem("stats",JSON.stringify(stats))
      localStorage.setItem("coins",JSON.stringify(coins))
      return {
        ...state,
        stats: state.stats = action.data.stats,
        coins: state.coins = action.data.coins,

      };

    default:
      return state;
  }

};
export default getDataApi
