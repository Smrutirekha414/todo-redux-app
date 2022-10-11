const initialData = {
  list: [],
};

const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD":
      const { id, data } = action.payload;

      if (data.length > 2) {
        return {
          ...state,
          list: [
            ...state.list,
            {
              id: id,
              data: data,
            },
          ],
        };
      }

    case "DELETE":
      const newList = state.list.filter((element) => element.id !== action.id);

      return {
        ...state,
        list: newList,
      };

    case "REMOVE":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default todoReducer;
