import React from 'react';
import { View } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import InnerSection from './InnerSection';
import { noteInputChange, createNote } from '../actions';
import { connect } from 'react-redux';

class NoteForm extends React.Component {
 
  create() {
    console.log('Entering create note function');
    const { title, body } = this.props;
    this.props.createNote({title, body});
  }

  render() {
    return (
      <View>
        <InnerSection>
          <FormInput
          value={this.props.title}
          placeholder="Title"
          onChangeText={text => this.props.noteInputChange({'field': 'title', 'value': text}) } />
        </InnerSection>
        <InnerSection>
          <FormInput
          value={this.props.body}
          placeholder="Body"
          onChangeText={text => this.props.noteInputChange({'field': 'body', 'value': text}) }
          multiline={true} 
          inputStyle={{height:200}}/>
        </InnerSection>
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
    body: state.note.body
  }
};

export default connect(mapStateToProps, { noteInputChange, createNote })(NoteForm);