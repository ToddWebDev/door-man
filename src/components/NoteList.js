import React, { Component } from 'react'
import { List, ListItem } from 'react-native-elements';
import { Text, View } from 'react-native'
import { connect } from 'react-redux';
import { getNotes } from '../actions';
import _ from 'lodash';

class NoteList extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  renderList() {
    console.log(this.props);
    return this.props.notes.map((note) => {
      return (
        <ListItem
          key={note.id}
          title={note.title}
        />
      );
    });
  }

  render() {
    return (
      <List>
        {this.renderList()}
      </List>
    );
  }
}

function mapStateToProps(state) {
  const notes = _.map(state.notes, (val, id) => {
    val['id'] = id;
    return val;
  });

  return { notes };
}

export default connect(mapStateToProps, { getNotes })(NoteList);