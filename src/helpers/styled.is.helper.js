import { css } from 'styled-components';

/**
 * @description
 * @author João Dias
 * @date 2019-03-30
 * @param {*} args
 * @param {*} props
 * @returns
 */
function handleFunctions(args, props) {
	let style = '';

	for (let i = 1; i < args.length; i++) {
		if (typeof args[i] === 'function') {
			const output = args[i](props);
			if (output.includes(':')) {
				style += output;
			}
		}
	}

	if (style) {
		const newArgs = args.slice(0);
		const argCss = args[0].slice(1);
		argCss.unshift(style + newArgs[0][0]);
		newArgs[0] = argCss;
		return newArgs;
	}

	return args;
}

const styledIf = (method, condition) => (...names) => (...args) => props => {
	return (
		(method === 'match'
			props[names[0]] === names[1] :
			names[method](name => {
  				return Boolean(props[name]) === condition;
  			})) && css(...handleFunctions(args, props))
	);
};

const is = styledIf('every', true);
const isNot = styledIf('every', false);
const isOr = styledIf('some', true);
const isSomeNot = styledIf('some', false);
const match = styledIf('match');

export default is;
export { isNot, isOr, isSomeNot, match };
