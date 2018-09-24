import React from 'react';
import { View } from 'react-native';
import { Button, FormValidationMessage } from 'react-native-elements';
import NoteForm from './NoteForm';
import InnerSection from './InnerSection';
import { noteInputChange, createNote } from '../actions';
import { connect } from 'react-redux';

class AddNote extends React.Component {

  create() {
    console.log('Entering create note function');
    const { title, body } = this.props;
    this.props.createNote({title, body});
    this.props.navigation.navigate('Notes');
  }

  showError() {
    if(this.props.error) {
      console.log(this.props.error);
      return (
        <FormValidationMessage>{this.props.error}</FormValidationMessage>
      )
    }
  }

  render() {
    return (
      <View>
        <NoteForm />
        {this.showError()}
        <InnerSection>
          <Button title="Add Note" onPress={this.create.bind(this)} backgroundColor={'#3bd3b4'} />
        </InnerSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.note.title,
    body: state.note.body,
    error: state.note.error
  }
};

export default connect(mapStateToProps, { noteInputChange, createNote })(AddNote);