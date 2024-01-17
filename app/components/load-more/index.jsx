import React from 'react'
import PropTypes from 'prop-types'
import {Button, Text} from '@salesforce/retail-react-app/app/components/shared/ui'
import {Link as RouteLink} from 'react-router-dom'

const LoadMore = (props) => {
    const {urls, currentURL} = props

    const currentIndex = urls.indexOf(currentURL) > 0 ? urls.indexOf(currentURL) : 0
    const loadMoreLink = urls[currentIndex + 1]

    return (
        <>
            <Button
                as={RouteLink}
                href={loadMoreLink || currentURL}
                to={loadMoreLink || currentURL}
                isDisabled={!loadMoreLink}
                variant="solid"
            >
                <Text>Load More</Text>
            </Button>
        </>
    )
}

LoadMore.displayName = 'LoadMore'

LoadMore.propTypes = {
    urls: PropTypes.array.isRequired,
    currentURL: PropTypes.string
}

export default LoadMore
