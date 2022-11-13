import * as React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import LaunchList, { OwnProps } from './LaunchList';

const LaunchListContainer: React.FC<OwnProps> = (props) => {
  const { data, error, loading } = useLaunchListQuery();

  console.log('data', data);

  //   function assertIsCharacter(character: any): asserts character is {name: string;} {
  //     if (!("name" in character)) {
  //       throw new Error("Not character");
  //     }
  //   }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <LaunchList data={data} {...props} />;
};

export default LaunchListContainer;
