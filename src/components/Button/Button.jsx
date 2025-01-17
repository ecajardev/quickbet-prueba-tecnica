import PropTypes from 'prop-types';

import './button.scss';

const Button = workout => {
    return (
        <button
            className={`btn ${workout.className}`}
            onClick={workout.onClick ? () => workout.onClick() : null}
        >
            {workout.children}
        </button>
    );
}

export const OutlineButton = props => {
    return (
        <Button
            className={`btn-outline ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </Button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;