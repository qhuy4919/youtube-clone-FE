import { Button, Icon } from 'semantic-ui-react';
import './comment-header.scss';

export function CommentsHeader(props: any) {
  const { amountComments } = props;
  return (
    <div className='comments-header'>
      <h4>{amountComments} Comments</h4>
      <Button basic compact icon labelPosition='left'>
        <Icon name='align left' />
        Sort by
      </Button>
    </div>
  );
}
