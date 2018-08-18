import React from 'react';
import { View } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import NoteForm from './NoteForm';
import InnerSection from './InnerSection';
import { noteInputChange, createNote } from '../actions';
import { connect } from 'react-redux';

class EditNote extends React.Component {
 
  create() {
    console.log('Entering create note function');
    const { title, body } = this.props;
    this.props.createNote({title, body});
  }

  render() {
    return (
      <View>
        <NoteForm />
        <InnerSection>
          <Button title="Save Note" onPress={this.create.bind(this)} backgroundColor={'#3bd3b4'} />
        </InnerSection>
        <InnerSection>
          <Button title="Delete" onPress={this.create.bind(this)} backgroundColor={'#ef2b35'} />
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

export default connect(mapStateToProps, { noteInputChange, createNote })(EditNote);