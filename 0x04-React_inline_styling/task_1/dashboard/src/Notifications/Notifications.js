import React, {Fragment} from 'react';
import closeIcon from '../Assets/close-icon.png';
import NotificationItem from "./NotificationItem";
import {arrayOf, bool} from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import {StyleSheet, css} from "aphrodite";


class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
    this.clsBtnClick = this.clsBtnClick.bind(this);
    this.displayDrawer = this.props.displayDrawer;
    this.listNotifications = this.props.listNotifications;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  clsBtnClick = () => {
    console.log("Close button has been clicked");
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    return (
      <Fragment>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {
          this.displayDrawer &&
          <div className="Notifications">
            <div className={css(styles.Notifications)}>
              {!this.listNotifications || this.listNotifications.length === 0 ? (
                <p>No new notification for now</p>
              ) : (
                <div>
                  <p>Here is the list of notifications</p>
                  <ul>
                    {this.listNotifications.map((notification) => (
                      <NotificationItem key={notification.id} type={notification.type} value={notification.value}
                                        html={notification.html} markAsRead={this.markAsRead} id={notification.id}/>
                    ))}
                  </ul>
                </div>
              )}
              <button
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "0",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  border: "none",
                }}
                aria-label="Close"
                onClick={this.clsBtnClick}
              >
                <img src={closeIcon} alt="close"
                     style={{width: "15px", height: "15px",}}
                />
              </button>
            </div>
          </div>
        }
      </Fragment>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: bool,
  listNotifications: arrayOf(NotificationItemShape),
};

const styles = StyleSheet.create({
  menuItem: {
    width: '100%',
    textAlign: 'right',
    marginBottom: '5px',
  },
  Notifications: {
    border: '#df344b dashed 1px',
    paddingLeft: '5px',
    paddingRight: '5vw',
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    marginBottom: '50px',
  },
});

export default Notifications;
