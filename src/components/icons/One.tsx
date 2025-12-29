interface OneIconProps {
    width?: number | string;
    height?: number | string;
    color?: string;
    className?: string;
}

const OneIcon = ({
    width = 48,
    height = 48,
    color = "currentColor",
    className = ""
}: OneIconProps) => (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M27.7654 10.1523C28.5127 10.4619 29 11.1911 29 12.0001L29 36.0001C29 37.1046 28.1046 38.0001 27 38.0001C25.8954 38.0001 25 37.1046 25 36.0001L25 16.8285L23.4142 18.4143C22.6332 19.1953 21.3668 19.1953 20.5858 18.4143C19.8047 17.6332 19.8047 16.3669 20.5858 15.5858L25.5858 10.5858C26.1578 10.0138 27.018 9.84274 27.7654 10.1523Z" fill="currentColor" />
    </svg>
);

export default OneIcon;
