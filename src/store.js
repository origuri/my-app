/*
 * 액션 : 함수를 호출 했을 때 해당 값들이 reducer에 할당 됨.
 * type과 payload가 key값
 * */
export const increase = (username) => ({
  type: 'INCREMENT',
  payload: username,
});
export const decrease = () => ({ type: 'DECREMENT' });

// 상태
const initstate = {
  number: 1,
  username: '',
};
/*
 * state에 initstate를 선언했기 때문에 사용할 때에는 state.number 식으로 사용가능.
 * 이름이 꼭 state일 필요는 없음.
 *
 * 액션의 결과를 걸러낼 수 있음.
 * */
const reducer = (state = initstate, action) => {
  // action은 increase, decrease
  switch (action.type) {
    case 'INCREMENT':
      // return 되면 그걸 호출할 쪽에서 받는게 아니라 return 되는 순간 ui 변경
      // state를 변경하겠다면 state.number, 파라미터를 그대로 사용하겠다면 action.payload;
      return { number: state.number + 1, username: action.payload };
    case 'DECREMENT':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default reducer;
