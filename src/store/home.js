const home = {
  state: {
    customers: { fullName: "Jaegar Resto" },
    menuList: [
      { name: "All Dishes", selected: true, category: "all-dishes" },
      { name: "Hot Dishes", selected: false, category: "hot-dishes" },
      { name: "Cold Dishes", selected: false, category: "cold-dishes" },
      { name: "Soup", selected: false, category: "soup" },
      { name: "Grill", selected: false, category: "grill" },
      { name: "Appetizer", selected: false, category: "appetizer" },
      { name: "Dessert", selected: false, category: "dessert" },
    ],
    optionalMenu: [
      { name: "Dine in", orderDish: "dine-in" },
      { name: "To go", orderDish: "go-to" },
      { name: "Delivery", orderDish: "delivery" },
    ],
    dishesList: [
      {
        img: "dish-1.png",
        title: "Spicy seasoned seafood noodles",
        price: "2.29",
        quantity: 20,
        counter: 0,
        desc: "Bowls available",
        category: "hot-dishes",
        isShown: true,
        orderDish: "delivery",
        id: 1,
      },
      {
        img: "dish-2.png",
        title: "Salted Pasta with mushroom sauce",
        price: "2.69",
        quantity: 23,
        counter: 0,
        desc: "Bowls available",
        category: "cold-dishes",
        isShown: true,
        orderDish: "dine-in",
        id: 2,
      },
      {
        img: "dish-3.png",
        title: "Beef dumpling in hot and sour soup",
        price: "2.99",
        quantity: 11,
        counter: 0,
        desc: "Bowls available",
        category: "grill",
        isShown: true,
        orderDish: "delivery",
        id: 3,
      },
      {
        img: "dish-4.png",
        title: "Healthy noodle with spinach leaf",
        price: "3.29",
        quantity: 24,
        counter: 0,
        desc: "Bowls available",
        category: "appetizer",
        isShown: true,
        orderDish: "dine-in",
        id: 4,
      },
      {
        img: "dish-5.png",
        title: "Hot spicy fried rice with omelet",
        price: "3.49",
        quantity: 19,
        counter: 0,
        desc: "Bowls available",
        category: "hot-dishes",
        isShown: true,
        orderDish: "dine-in",
        id: 5,
      },
      {
        img: "dish-6.png",
        title: "Spicy instant noodle with special omelette",
        price: "3.59",
        quantity: 21,
        counter: 0,
        desc: "Bowls available",
        category: "grill",
        isShown: true,
        orderDish: "dine-in",
        id: 6,
      },
      {
        img: "dish-4.png",
        title: "Healthy noodle with spinach leaf",
        price: "3.29",
        quantity: 25,
        counter: 0,
        desc: "Bowls available",
        category: "soup",
        isShown: true,
        orderDish: "delivery",
        id: 4,
      },
      {
        img: "dish-5.png",
        title: "Hot spicy fried rice with omelet",
        price: "3.49",
        quantity: 14,
        counter: 0,
        desc: "Bowls available",
        category: "hot-dishes",
        isShown: true,
        orderDish: "dine-in",
        id: 5,
      },
      {
        img: "dish-6.png",
        title: "Spicy instant noodle with special omelette",
        price: "3.59",
        quantity: 17,
        counter: 0,
        desc: "Bowls available",
        category: "dessert",
        isShown: true,
        orderDish: "delivery",
        id: 6,
      },
      {
        img: "dish-1.png",
        title: "Spicy seasoned seafood noodles",
        price: "2.29",
        quantity: 29,
        counter: 0,
        desc: "Bowls available",
        category: "cold-dishes",
        isShown: true,
        orderDish: "dine-in",
        id: 1,
      },
      {
        img: "dish-2.png",
        title: "Salted Pasta with mushroom sauce",
        price: "2.69",
        quantity: 11,
        counter: 0,
        desc: "Bowls available",
        category: "grill",
        isShown: true,
        orderDish: "go-to",
        id: 2,
      },
      {
        img: "dish-3.png",
        title: "Beef dumpling in hot and sour soup",
        price: "2.99",
        quantity: 16,
        counter: 0,
        desc: "Bowls available",
        category: "grill",
        isShown: true,
        orderDish: "go-to",
        id: 3,
      },
      {
        img: "dish-4.png",
        title: "Healthy noodle with spinach leaf",
        price: "3.29",
        quantity: 22,
        counter: 0,
        desc: "Bowls available",
        category: "appetizer",
        isShown: true,
        orderDish: "delivery",
        id: 4,
      },
      {
        img: "dish-5.png",
        title: "Hot spicy fried rice with omelet",
        price: "3.49",
        quantity: 13,
        counter: 0,
        desc: "Bowls available",
        category: "appetizer",
        isShown: true,
        orderDish: "go-to",
        id: 5,
      },
      {
        img: "dish-6.png",
        title: "Spicy instant noodle with special omelette",
        price: "3.59",
        quantity: 17,
        counter: 0,
        desc: "Bowls available",
        category: "soup",
        isShown: true,
        orderDish: "dine-in",
        id: 6,
      },
      {
        img: "dish-4.png",
        title: "Healthy noodle with spinach leaf",
        price: "3.29",
        quantity: 22,
        counter: 0,
        desc: "Bowls available",
        category: "soup",
        isShown: true,
        orderDish: "dine-in",
        id: 4,
      },
      {
        img: "dish-5.png",
        title: "Hot spicy fried rice with omelet",
        price: "3.49",
        quantity: 13,
        counter: 0,
        desc: "Bowls available",
        category: "dessert",
        isShown: true,
        orderDish: "go-to",
        id: 5,
      },
      {
        img: "dish-6.png",
        title: "Spicy instant noodle with special omelette",
        price: "3.59",
        quantity: 17,
        counter: 0,
        desc: "Bowls available",
        category: "dessert",
        isShown: true,
        orderDish: "dine-in",
        id: 6,
      },
    ],
  },
  getters: {
    getCustomer(state) {
      return state.customers;
    },
    getMenuList(state) {
      return state.menuList;
    },
    getOptionalMenu(state) {
      return state.optionalMenu;
    },
    getDishesList(state) {
      return state.dishesList;
    },
  },
  mutations: {
    setSelectedItem(state, data) {
      state.dishesList.forEach((element) => {
        if (element.category == state.menuList[data].category) {
          element.isShown = true;
        } else {
          element.isShown = false;
        }
      });
      state.menuList.forEach((element) => (element.selected = false));
      state.menuList[data].selected = true;
      if (state.menuList[data].category == "all-dishes") {
        state.dishesList.forEach((element) => (element.isShown = true));
      }
    },
  },
  actions: {
    actionSelectedItem({ commit }, payload) {
      commit("setSelectedItem", payload);
    },
  },
};

export default home;
