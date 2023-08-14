import { StyledPaginationControls } from "./styles/StyledPaginationControls";

function PaginationControls(props: { currentPageIndex: number, totalPageCount: number, onPreviousPage: Function, onNextPage: Function }) {
    return (
        <StyledPaginationControls>
            <button
                disabled={props.currentPageIndex === 0}
                onClick={() => props.onPreviousPage(props.currentPageIndex - 1)}
                type="button"
            >
                Previous page
            </button>
            <span>{props.currentPageIndex + 1}</span>
            <button
                disabled={props.currentPageIndex === props.totalPageCount - 1}
                onClick={() => props.onNextPage(props.currentPageIndex + 1)}
                type="button"
            >
                Next page
            </button>
        </StyledPaginationControls>
    )
}


export default PaginationControls;
