import React from 'react';
import { View } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import NoteForm from './NoteForm';
import InnerSection from './InnerSection';
import { noteInputChange, editNote, deleteNote } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class EditNote extends React.Component {

  componentDidMount() {
    const { params } = this.props.navigation.state;
    _.each(params.note, (value, field) => {
      this.props.noteInputChange({field, value});
    });
  }
 
  edit() {
    const { id } = this.props.navigation.state.params.note;
    const { title, body } = this.props;
    this.props.editNote({title, body, id});
    this.props.navigation.navigate('Notes');
  }

  delete() {
    const { id } = this.props.navigation.state.params.note;
    this.props.deleteNote({id});
    this.props.navigation.navigate('Notes');
  }

  render() {
    return (
      <View>
        <NoteForm {...this.props}/>
        <InnerSection>
          <Button title="Save Note" onPress={this.edit.bind(this)} backgroundColor={'#3bd3b4'} />
        </InnerSection>
        <InnerSection>
          <Button title="Delete" onPress={this.delete.bind(this)} backgroundColor={'#ef2b35'} />
        </InnerSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.note.title,
    body: state.note.body
  }
};

export default connect(mapStateToProps, { noteInputChange, editNote, deleteNote })(EditNote);