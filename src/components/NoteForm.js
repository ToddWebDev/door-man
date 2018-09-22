import React from 'react';
import { View } from 'react-native';
import { FormInput } from 'react-native-elements';
import InnerSection from './InnerSection';
import { noteInputChange, createNote } from '../actions';
import { connect } from 'react-redux';

class NoteForm extends React.Component {

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
      </View>
    );
  }
}

export default connect(null, { noteInputChange, createNote })(NoteForm);