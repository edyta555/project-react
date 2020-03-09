import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    columnTitle: PropTypes.node,
    description: PropTypes.node,
    columns: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const {title, image, description}= this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} imageUrl={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          <Column columnTitle={'one'}/>
          <Column columnTitle={'two'}/>
          <Column columnTitle={'three'}/>
        </div>
      </section>
    );
  }
}

export default List;
