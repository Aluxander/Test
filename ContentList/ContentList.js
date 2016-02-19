import React, { Component, PropTypes } from "react";

import s from "./ContentList.scss";
import withStyles from "../../../decorators/withStyles";
import StreamCell from "../../elements/StreamCell";
import BroadcasterCell from "../../elements/BroadcasterCell";
import TagCell from "../../elements/TagCell";

@withStyles(s)
class ContentList extends Component {

    static propTypes = {
        content: PropTypes.array.isRequired,
        contentType: PropTypes.string.isRequired,
        title: PropTypes.string,
        isEmptyComponent: PropTypes.component,
    };

    render() {
        const contentCells = this.props.content.map((o, i) => {
            if (o) {
                switch (this.props.contentType) {
                    case "streams":
                        return <StreamCell stream={o} key={i} style={{ animationDelay: 0.5 * i, opacity: i > 25 ? 0 : 1 }}/>;
                    case "broadcasters":
                        return <BroadcasterCell broadcaster={o} key={i} />;
                    case "tags":
                        return <TagCell tag={o} key={i} />;
                    default:
                }
            }
            return null;
        });
        let title;
        if (this.props.title) {
            title = (
                <div className={s.titleWrapper}>
                    <div className={s.titleContainer}>
                        <p className={s.title}>{ this.props.title }</p>
                    </div>
                </div>
            );
        }
        return (
            <div className={s.root}>
                {title}
                <div className={s.container}>
                    {this.props.isEmptyComponent}
                    {contentCells}
                </div>
            </div>
        );
    }
}

export default ContentList;
