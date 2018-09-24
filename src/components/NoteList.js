import React, { Component } from 'react'
import { List, ListItem } from 'react-native-elements';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getNotes } from '../actions';
import _ from 'lodash';

const styles = {
  container: {
    marginTop: 100
  }
}

class NoteList extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  renderList() {
    return this.props.notes.map((note) => {
      return (
        <ListItem
          key={note.id}
          title={note.title}
          onPress={() => this.props.navigation.navigate('EditNote', { note })}
        />
      );
    });
  }

  render() {
    if(this.props.notes.length) {
      return (
        <List containerStyle={{marginTop: 0}}>
          {this.renderList()}
        </List>
      );
    } else {
      return (
        <View style={{margin: 40}}>
          <Text style={{textAlign: 'center', color: '#999'}}>Get started with the plus button.</Text>
        </View>
      );
    }
  }
}

function mapStateToProps(state) {
  const notes = _.map(state.notes, (val, id) => {
    val['id'] = id;
    return val;
  });

  return { 
    notes,
    loading: state.auth.loading
  };
}

export default connect(mapStateToProps, { getNotes })(NoteList);