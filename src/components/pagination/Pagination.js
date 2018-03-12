import React, { Component } from 'react'
import { Grid, Pagination } from 'semantic-ui-react'
import {changedPage} from "./_store/actions/PaginationAction";
import {connect} from 'react-redux';


class PaginationCustomization extends Component {
    constructor(props){
        super(props);
        this.state = {
            activePage: props.activePage?props.activePage:1,
            boundaryRange: 1,
            siblingRange: 1,
            showEllipsis: true,
            showFirstAndLastNav: false,
            showPreviousAndNextNav: true,
            totalPages: props.totalPages,
        };

    }

    handlePaginationChange = (e, { activePage }) => {
        this.props.changedPage(activePage);
        this.setState({ activePage });
    };

    render() {
        const {
            activePage,
            boundaryRange,
            siblingRange,
            showEllipsis,
            showFirstAndLastNav,
            showPreviousAndNextNav,
            totalPages,
        } = this.state;

        return (
            totalPages >= 1 ?
                <Grid columns={1}>
                    <Grid.Column>
                        <Pagination
                            activePage={activePage}
                            boundaryRange={boundaryRange}
                            onPageChange={this.handlePaginationChange}
                            size='mini'
                            siblingRange={siblingRange}
                            totalPages={totalPages}
                            ellipsisItem={showEllipsis ? undefined : null}
                            firstItem={showFirstAndLastNav ? undefined : null}
                            lastItem={showFirstAndLastNav ? undefined : null}
                            prevItem={showPreviousAndNextNav ? undefined : null}
                            nextItem={showPreviousAndNextNav ? undefined : null}
                        />
                    </Grid.Column>
                </Grid>
                : null
        )
    }
}
const mapDispatchToProps = dispatch => ({
    changedPage(newPage){
        dispatch(changedPage(newPage))
    }
});

export default connect(null,mapDispatchToProps)(PaginationCustomization);