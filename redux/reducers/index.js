export default (state = 0, action) => {
  	switch (action.type) {
    	case '加':
      		return state + 1
    	case '减':
      		return state - 1
    	default:
      		return state
  	}
}