function SvgIcon({ name, width = 24, height = 24 }) {
    return (
        <svg className={`icon icon-${name}`} width={width} height={height}>
            <use xlinkHref={`../public/icons.svg#icon-${name}`} />
        </svg>
    );
}
