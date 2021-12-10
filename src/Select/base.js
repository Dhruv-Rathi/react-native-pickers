import React from 'react';
import useSearchSelect from '../useSearchSelect';
import {View, Text} from 'react-native';

const LabelCloseComponent = () => {
  return 'Close';
};
const LabelClearComponent = () => {
  return 'Clear';
};

const NoDataComponent = () => {
  return <View>No Data</View>;
};

const Index = ({
  id,
  label,
  showLabel = true,
  OptionsRenderer,
  SelectedDataRenderer = null,
  SearchRenderer = null,
  disabled = false,
  onChange,
  multiple = false,
  dataSource,
  defaultSelected = [],
  errorText = undefined,
  valueKey = 'value',
  defaultOpen = false,
  defaultQuery = '',
  refresh = '',
  ...props
}) => {
  const {
    open,
    setOpen,
    query,
    setQuery,
    options,
    addOrRemove,
    selected,
    setSelected,
  } = useSearchSelect(
    onChange,
    dataSource,
    defaultSelected,
    valueKey,
    defaultOpen,
    defaultQuery,
    refresh,
  );

  const textStyles = {
    ...(props.textStyles || {
      fontWeight: 'bold',
      color: props.textColor || '#000',
      letterSpacing: 0,
    }),
  };

  return (
    <View style={{...props.componentWrapperStyles}}>
      {label !== '' && label !== undefined && showLabel && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 12,
            marginBottom: 7,
          }}>
          <Text style={textStyles}>{label}</Text>
        </View>
      )}
      {selected.length > 0 && !open && (
        <View>
          <Text onPress={() => setSelected([])}>
            {props.clearText || <LabelClearComponent />}
          </Text>
        </View>
      )}
      {open && (
        <View>
          <Text onPress={() => setOpen(false)}>
            {props.closeComponent || <LabelCloseComponent />}
          </Text>
        </View>
      )}

      <View>
        {open === false && (
          <View onPress={() => setOpen(true)}>
            <SelectedDataRenderer selected={selected} />
            {/* {props.suffixIcon || (
                      <Text><ArrowIcon /></Text>
                  )} */}
          </View>
        )}
        {open === false && errorText !== '' && <Text>{errorText}</Text>}
        {open === true && (
          <View>
            <SearchRenderer
              query={query}
              onSearch={v => {
                setQuery(v);
              }}
              cancelSearch={() => setOpen(false)}
            />
            <View style={{...props.optionsWrapperStyles}}>
              {options.length > 0 && (
                <>
                  {options.map(option => (
                    <View
                      onPress={() => {
                        addOrRemove(multiple, option);
                      }}
                      key={`options${option.value}`}>
                      <OptionsRenderer value={option} selected={selected} />
                    </View>
                  ))}
                </>
              )}
              {options.length === 0 && (
                <>
                  {props.noDataComponent || (
                    <NoDataComponent query={query} options={options} />
                  )}
                </>
              )}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default Index;
